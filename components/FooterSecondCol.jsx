import {footerListsSecondCol} from '../PageData/data'

 
 export default function FooterSecondCol() {
     return (
        <div className="primeraColumna">
      
        {footerListsSecondCol.map((item, index) => {
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
     )
 }
 