export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} www.Baseball-Catcher.com - All Rights Reserved.</p>
    </footer>
  );
}
