import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function DashboardLayout({ children }) {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <section>
      {children}
    </section>
  );
} 