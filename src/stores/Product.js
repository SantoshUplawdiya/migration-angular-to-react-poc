import { makeAutoObservable,observable,action } from "mobx"
import _ from "lodash";
class ProductStore {
    productList =[]
    paginatedPosts=[]
    currentPage=1
    pageSize=4
    pages=[]
    constructor() {
        makeAutoObservable(this,{
            productList: observable,
            paginatedPosts:observable,
            currentPage:observable,
            getProducts:action
        });
    }
    

    getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        //setPosts(await response.json());
        this.productList = await response.json();
        // this.paginatedPosts = _(this.productList).slice(0).take(this.pageSize).value();
        const numberOfPages = Math.ceil(this.productList.length / this.pageSize);
        this.paginatedPosts = Array.from({length: numberOfPages}, (_, i) => i + 1);
        // console.log("Store paginated", this.paginatedPosts);
        this.pagination(1);
        // console.log(this.productList, "Product store pagiantion");
        //setpaginatedPosts(_(response.data).slice(0).take(pageSize).value());
      };

      getPages = () => {
        const pageCount = this.productList ? Math.ceil(this.productList.length / this.pageSize) : 0;
        if (pageCount === 1) return null;
        this.pages = _.range(1, pageCount + 1);
      }

    pagination = (pageNo) => {
        this.currentPage = pageNo;
        const startIndex = (pageNo - 1) * this.pageSize;
        this.paginatedPosts = _(this.productList).slice(startIndex).take(this.pageSize).value();
        // console.log("Pagination Function", this.paginatedPosts);
      };
    
      changePageSize = (pageSize) => {
        this.pageSize = pageSize;
        this.getPages();
        this.pagination(1);
      }
    
  }

const productStore = new ProductStore();
export default productStore;
