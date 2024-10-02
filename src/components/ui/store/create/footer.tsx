interface FooterProps {
  paddingTop: number;
}

export default function Footer({ paddingTop }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <div
      className="font-regular mx-0 mb-4 ml-8 mr-11 flex justify-between font-satoshi text-[15px] text-white/70"
      style={{ paddingTop: paddingTop }}
    >
      <div>
        <p>&copy; 2023-{year}. All rights Skynet</p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href="#">License</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
