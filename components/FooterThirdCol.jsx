import { footerListsThirdCol } from "../PageData/data";

export default function FooterThirdCol() {
  return (
    <div className="Tercera mt-7">
      {footerListsThirdCol.map((item, index) => {
        return (
          <ul key={index} className="">
            <h1 className="font-black text-left ">{item.title}</h1>
            {item.label.map((item2, index) => {
              return (
                <li className="text-left my-2" key={index}>
                  <a href={item2.url} className="hover:text-blue-300">
                    {item2.text}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
