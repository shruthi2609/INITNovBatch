import { IntroDetails } from "./Components/IntroDetails"
import { ProductCatalog } from "./Components/ProductCatalog"
export const App=()=>{
  return(
    <div>
<IntroDetails intro={{cName:"amazon",GstNo:"xya678"}}></IntroDetails>
<ProductCatalog 
detail={{
    imgSource:"https://m.media-amazon.com/images/I/81wXCcSsS3L._SL1500_.jpg" ,
    prodLink:"https://www.amazon.in/dp/B014QQ4P0Y/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-5&pf_rd_r=H7EWT2439HXZ4A9EBXW0&pf_rd_t=101&pf_rd_p=ec0ededf-1033-46f3-af59-ce6979044741&pf_rd_i=16368877031&th=1" ,
    price:"Rs.500"
}}
></ProductCatalog>
<ProductCatalog 
detail={{
    imgSource:"https://m.media-amazon.com/images/I/71dbO5GHjhS._AC_UL320_.jpg" ,
    prodLink:"https://www.amazon.in/s?i=kitchen&bbn=1380162031&rh=n%3A976442031%2Cn%3A5925789031%2Cn%3A1380098031%2Cn%3A1380162031%2Cn%3A3248218031%2Cp_72%3A1318477031&pf_rd_i=5925789031&pf_rd_m=A1K21FY43GMZF8&pf_rd_p=66a86de7-b1c0-4773-a77c-e8d89b72c810&pf_rd_r=1ZBBMBRJ35ZBDDTQ7HNT&pf_rd_s=merchandised-search-1&pf_rd_t=101&qid=1636551775&rnid=1380162031&ref=sr_nr_n_7" 
    ,price:"Rs.100"
}}
></ProductCatalog>
    </div>
  )
}

//export default
//export by component name
