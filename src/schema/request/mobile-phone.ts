import { IsNumber, IsString } from '../../deps.ts';

export class MobilePhoneSaveIn {
  @IsString()
  public model_name?: string;
  @IsString()
  public size?: string;
  @IsString()
  public spec?: string;
  @IsNumber()
  public ram?: number;
  @IsNumber()
  public rom?: number;
  @IsString()
  public seria_number?: string;
}

export class MobilePhoneModifyIn {
  @IsString()
  public _id?: string;
  @IsString()
  public model_name?: string;
  @IsString()
  public size?: string;
  @IsString()
  public spec?: string;
  @IsNumber()
  public ram?: number;
  @IsNumber()
  public rom?: number;
  @IsString()
  public seria_number?: string;
}

export class MobilePhoneModifyInPatch {
  @IsString()
  public _id?: string;
  @IsString()
  public model_name?: string;
}
