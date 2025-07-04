const FooterLinkSection = ({ title, links }) => (
  <div>
    <h3 className="text-base font-semibold mb-4 text-[#151515]">{title}</h3>
    <ul className="space-y-2 text-sm text-black font-semibold ">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-black/80">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkSection;
