import { IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsNumber()
    readonly id: number
    
    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

    @IsNumber()
    readonly price: number

    @IsString({each: true})
    readonly tags: string[]
}
