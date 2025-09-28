import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = 'CircleAlert', ...props }) => {
  try {
    const IconComponent = (LucideIcons as Record<string, React.FC<LucideProps>>)[name];

    if (!IconComponent) {
      // Если иконка не найдена, используем fallback иконку
      const FallbackIcon = (LucideIcons as Record<string, React.FC<LucideProps>>)[fallback];

      // Если даже fallback не найден, возвращаем пустой span
      if (!FallbackIcon) {
        return <span className="inline-block w-4 h-4 text-xs text-gray-400" {...props}>[?]</span>;
      }

      return <FallbackIcon {...props} />;
    }

    return <IconComponent {...props} />;
  } catch (error) {
    // Если произошла ошибка, возвращаем безопасную заглушку
    return <span className="inline-block w-4 h-4 text-xs text-gray-400" {...props}>[!]</span>;
  }
};

export default Icon;