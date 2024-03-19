import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/entities/Product.entity';

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            name: "Pulseira praiana",
            description: "Pulseira feita com conchas e pérolas.",
            price: 6.00,
            tags: ["praia", "dia", "sol"]
        }
    ]

    findAll(){
        return this.products
    }

    findOne(id: string){
        const existingProduct = this.products.find((product: Product) => product.id === +id)

        if(!existingProduct){
            throw new HttpException(`Produto id ${id} não encontrado.`, HttpStatus.NOT_FOUND)
        }

        return existingProduct
    }

    create(createProductDto: any){
        this.products.push(createProductDto)
        return createProductDto
    }

    update(id: string, updateProductDto: any){
        const indexProduct = this.products.findIndex(
            (product : Product) => product.id === +id)

        this.products[indexProduct] = {...this.products[indexProduct] , ...updateProductDto}
    }

    remove(id: string){
        const indexProduct = this.products.findIndex(product => product.id === +id)
        
        if(indexProduct >= 0){
            this.products.splice(indexProduct, 1)
        }
    }


}
