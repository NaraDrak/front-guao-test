import { footerListsForthCol } from "../PageData/data";

export default function FooterFourthCol() {
  return (
    <div className="CuartaColumna mt-7">
      {footerListsForthCol.map((item, index) => {
        return (
          <ul key={index} className="">
            <h1 className="font-black text-left">{item.title}</h1>
            {item.label.map((item2, index2) => {
              return (
                <li className="text-left my-2" key={index2}>
                  <p className="text-left my2">{item2.text}</p>
                  <p className="text-left my2 hover:text-blue-300 text-red-500">
                    {item2.url}
                  </p>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
