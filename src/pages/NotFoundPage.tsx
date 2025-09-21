import { Link } from 'react-router-dom';
import { Button } from '@components/ui';

export const NotFoundPage = () => {
  return (
    <div className="text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};
