import { footerListsForthCol } from "../PageData/data";

export default function FooterFourthCol() {
  return (
    <div className="CuartaColumna">
      {footerListsForthCol.map((item, index) => {
        return (
          <ul key={index} className="">
            <h1 className="font-black text-left pl-3">{item.title}</h1>
            {item.label.map((item2, index) => {
              return (
                <li className="text-left my-2" key={index}>
                  <a href={item2.url} className="p-3 hover:text-blue-300">
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
