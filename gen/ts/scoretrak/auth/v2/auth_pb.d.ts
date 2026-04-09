import * as jspb from 'google-protobuf'



export class AuthServiceLoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AuthServiceLoginRequest;

  getPassword(): string;
  setPassword(value: string): AuthServiceLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthServiceLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthServiceLoginRequest): AuthServiceLoginRequest.AsObject;
  static serializeBinaryToWriter(message: AuthServiceLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthServiceLoginRequest;
  static deserializeBinaryFromReader(message: AuthServiceLoginRequest, reader: jspb.BinaryReader): AuthServiceLoginRequest;
}

export namespace AuthServiceLoginRequest {
  export type AsObject = {
    username: string;
    password: string;
  };
}

export class AuthServiceLoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthServiceLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthServiceLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthServiceLoginResponse): AuthServiceLoginResponse.AsObject;
  static serializeBinaryToWriter(message: AuthServiceLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthServiceLoginResponse;
  static deserializeBinaryFromReader(message: AuthServiceLoginResponse, reader: jspb.BinaryReader): AuthServiceLoginResponse;
}

export namespace AuthServiceLoginResponse {
  export type AsObject = {
    accessToken: string;
  };
}

