function Footer() {
  return (
    <div className="w-full px-4 flex my-6   justify-between space-between items-center justify-self-center  bg-transparent">
      <div className="flex justify-between items-center">
        <div className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Anis Hackathon 2025
        </div>
      </div>
    </div>
  );
}

export default Footer;
