import { footerListsFivethCol } from "../PageData/data";

export default function FooterFivethCol() {
  return (
    <div className="quintaColumna mt-7 mr-16">
      {footerListsFivethCol.map((item, index) => {
        return (
          <ul key={index}>
            <h1 className="font-black text-left">{item.title}</h1>
            {item.label.map((item2, index) => {
              return (
                <li className="text-left my-2" key={index}>
                  <p>{item2.text}</p>
                  <p>{item2.url}</p>
                </li>
              );
            })}
            <div className="mt-8 ml-">
              <button className=" bg-red-500 ">Paga en linea ahora</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
}