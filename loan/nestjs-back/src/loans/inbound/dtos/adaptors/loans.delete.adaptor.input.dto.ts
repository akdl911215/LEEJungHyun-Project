import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoansDeleteAdaptorInputDto {
  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
  })
  public id!: string;

  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
  })
  public creditorsId!: string;

  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
  })
  public debtorsId!: string;
}