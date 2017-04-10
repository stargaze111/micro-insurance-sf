import {PipeTransform, Pipe} from '@angular/core'
import {IReturnTransactionModel} from '../models/return-transaction.model'
import {IReturnSummeryModel} from '../models/return-ISummery.model'


@Pipe({
    name: 'transactionsCompanyFilter'
})

export class TransactionCompanyFilterPipe implements PipeTransform{
    transform(value: IReturnTransactionModel[], filterBy: string): IReturnTransactionModel[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase():null;
        return filterBy? value.filter(
            (transaction:IReturnTransactionModel)=>transaction.company.toLocaleLowerCase().indexOf(filterBy)!=-1
            ):value
    }
}


@Pipe({
    name: 'transactionsTypeFilter'
})

export class TransactionTypeFilterPipe implements PipeTransform{
    transform(value: IReturnTransactionModel[], filterBy: string): IReturnTransactionModel[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase():null;
        return filterBy? value.filter(
            (transaction:IReturnTransactionModel)=>transaction.insuranceType.toLocaleLowerCase().indexOf(filterBy)!=-1
            ):value
    }
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe {
    transform(array:Array<any>, args:any[]):any {

    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id

    if(array) {

      // get the first element

      let orderByValue = args[0]
      let byVal = 1

      // check if exclamation point 

      if(orderByValue.charAt(0) == "!") {

        // reverse the array

        byVal = -1
        orderByValue = orderByValue.substring(1)
      }
      console.log("byVal",byVal);
      console.log("orderByValue",orderByValue);

      array.sort((a: any, b: any) => {
        if(a[orderByValue] < b[orderByValue]) {
          return -1*byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1*byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
    //
  }
}

