import { makeAutoObservable,observable,action } from "mobx"
import _ from "lodash";
class ProductStore {
    productList =[]
    paginatePosts=[]
    currentPage=1
    pageSize=4
    constructor() {
        makeAutoObservable(this,{
            productList: observable,
            paginatePosts:observable,
            currentPage:observable,
            getProducts:action
            
        });
    }
    updateProfile = (payload) => {
        this.user = payload;
    }

    getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        //setPosts(await response.json());
        this.productList = await response.json();
        this.paginatePosts = _(response.data).slice(0).take(this.pageSize).value();
        //setpaginatedPosts(_(response.data).slice(0).take(pageSize).value());
      };

    pagination = (pageNo) => {
        this.currentPage = pageNo;
        const startIndex = (pageNo - 1) * this.pageSize;
        this.paginatedPosts = _(users).slice(startIndex).take(this.pageSize).value();
        
      };
    
  }

const productStore = new ProductStore();
export default productStore;
