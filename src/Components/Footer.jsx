const Footer = () => (
  <footer className="bg-[#f5f5f7] text-gray-700 text-sm py-10 px-8">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
      <div>
        <h4 className="font-semibold mb-3">Shop and Learn</h4>
        <ul className="space-y-1">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
        </ul>
      </div>
      {/* Repeat for other sections */}
    </div>
    <div className="border-t mt-10 pt-6 text-center text-xs text-gray-500">
      © 2025 Apple Inc. All rights reserved.
    </div>
  </footer>
);
export default Footer;
