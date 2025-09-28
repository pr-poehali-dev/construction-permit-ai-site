import json
import urllib.request
import urllib.parse
import os
from typing import Dict, Any
from pydantic import BaseModel, Field, ValidationError

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=1)
    email: str = Field(..., min_length=1)
    message: str = Field(..., min_length=1)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправляет данные формы обратной связи в Telegram бот
    Args: event - dict с httpMethod, body, headers
          context - объект с request_id, function_name
    Returns: HTTP ответ с результатом отправки
    Version: 1.1 - обновлено для работы с новыми секретами
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Только POST запросы разрешены'})
        }
    
    # Получение данных из формы
    try:
        body_data = json.loads(event.get('body', '{}'))
        form_data = ContactForm(**body_data)
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверные данные формы', 'details': str(e)})
        }
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверный JSON'})
        }
    
    # Получение токена и chat_id из переменных окружения
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Не настроены параметры Telegram'})
        }
    
    # Формирование сообщения
    message_text = f"""🏗️ Новая заявка с "Центра строительных решений"

👤 Имя: {form_data.name}
📞 Телефон: {form_data.phone}
📧 Email: {form_data.email}

💬 Сообщение:
{form_data.message}

⏰ Время: {context.request_id}"""
    
    # Отправка сообщения в Telegram
    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    
    data = {
        'chat_id': chat_id,
        'text': message_text,
        'parse_mode': 'HTML'
    }
    
    try:
        # Кодирование данных для POST запроса
        post_data = urllib.parse.urlencode(data).encode('utf-8')
        
        # Создание запроса
        req = urllib.request.Request(
            telegram_url,
            data=post_data,
            headers={'Content-Type': 'application/x-www-form-urlencoded'}
        )
        
        # Отправка запроса
        with urllib.request.urlopen(req) as response:
            response_data = json.loads(response.read().decode('utf-8'))
            
        if response_data.get('ok'):
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
            }
        else:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Ошибка отправки в Telegram', 'details': response_data})
            }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }