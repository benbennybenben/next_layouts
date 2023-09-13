const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 py-6">
      <div className="text-sm font-light font-mono">
        This is the footer {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
