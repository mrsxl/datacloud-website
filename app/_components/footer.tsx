export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="border-white/10 border-t bg-black">
      <p className="py-4 text-center text-sm text-white/50">
        © {currentYear} DATACLOUD. All rights reserved.
      </p>
    </footer>
  );
}
