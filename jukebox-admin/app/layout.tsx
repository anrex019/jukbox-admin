export const metadata = {
  title: 'Jukebox Admin',
  description: 'Admin panel for Jukebox',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
