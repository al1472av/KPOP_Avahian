import { Input , Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
	templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent { 
	@Input() productName: string;

		 _productPriceHRN: number;
	@Input()
	set productPriceHRN(price:number) {
		if(price < 0)
			this._productPriceHRN = 0;
		else
			this._productPriceHRN = price;
  }
  get productPriceHRN() { return this._productPriceHRN; }
	arr: number[] = [];

    productPriceSum():number{
		const result = this.arr.reduce((accumulator, current) => {
  			return accumulator + current;
		}, 0);
		return result;
  }
  clickEvent(){
	this.arr.push(this.productPriceHRN);
  }
  
	

}

