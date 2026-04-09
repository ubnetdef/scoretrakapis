import * as jspb from 'google-protobuf'

import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"


export class User extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): User;
  hasId(): boolean;
  clearId(): User;

  getUsername(): string;
  setUsername(value: string): User;

  getTeamId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setTeamId(value?: scoretrak_proto_v1_uuid_pb.UUID): User;
  hasTeamId(): boolean;
  clearTeamId(): User;

  getPassword(): string;
  setPassword(value: string): User;

  getRole(): Role;
  setRole(value: Role): User;

  getPasswordHash(): string;
  setPasswordHash(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    username: string;
    teamId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    password: string;
    role: Role;
    passwordHash: string;
  };
}

export class UserServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceGetAllRequest): UserServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceGetAllRequest;
  static deserializeBinaryFromReader(message: UserServiceGetAllRequest, reader: jspb.BinaryReader): UserServiceGetAllRequest;
}

export namespace UserServiceGetAllRequest {
  export type AsObject = {
  };
}

export class UserServiceGetAllResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserServiceGetAllResponse;
  clearUsersList(): UserServiceGetAllResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceGetAllResponse): UserServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceGetAllResponse;
  static deserializeBinaryFromReader(message: UserServiceGetAllResponse, reader: jspb.BinaryReader): UserServiceGetAllResponse;
}

export namespace UserServiceGetAllResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>;
  };
}

export class UserServiceGetByIDRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): UserServiceGetByIDRequest;
  hasId(): boolean;
  clearId(): UserServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceGetByIDRequest): UserServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: UserServiceGetByIDRequest, reader: jspb.BinaryReader): UserServiceGetByIDRequest;
}

export namespace UserServiceGetByIDRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class UserServiceGetByIDResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UserServiceGetByIDResponse;
  hasUser(): boolean;
  clearUser(): UserServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceGetByIDResponse): UserServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: UserServiceGetByIDResponse, reader: jspb.BinaryReader): UserServiceGetByIDResponse;
}

export namespace UserServiceGetByIDResponse {
  export type AsObject = {
    user?: User.AsObject;
  };
}

export class UserServiceDeleteRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): UserServiceDeleteRequest;
  hasId(): boolean;
  clearId(): UserServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceDeleteRequest): UserServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceDeleteRequest;
  static deserializeBinaryFromReader(message: UserServiceDeleteRequest, reader: jspb.BinaryReader): UserServiceDeleteRequest;
}

export namespace UserServiceDeleteRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class UserServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceDeleteResponse): UserServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceDeleteResponse;
  static deserializeBinaryFromReader(message: UserServiceDeleteResponse, reader: jspb.BinaryReader): UserServiceDeleteResponse;
}

export namespace UserServiceDeleteResponse {
  export type AsObject = {
  };
}

export class UserServiceStoreRequest extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserServiceStoreRequest;
  clearUsersList(): UserServiceStoreRequest;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceStoreRequest): UserServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceStoreRequest;
  static deserializeBinaryFromReader(message: UserServiceStoreRequest, reader: jspb.BinaryReader): UserServiceStoreRequest;
}

export namespace UserServiceStoreRequest {
  export type AsObject = {
    usersList: Array<User.AsObject>;
  };
}

export class UserServiceStoreResponse extends jspb.Message {
  getIdsList(): Array<scoretrak_proto_v1_uuid_pb.UUID>;
  setIdsList(value: Array<scoretrak_proto_v1_uuid_pb.UUID>): UserServiceStoreResponse;
  clearIdsList(): UserServiceStoreResponse;
  addIds(value?: scoretrak_proto_v1_uuid_pb.UUID, index?: number): scoretrak_proto_v1_uuid_pb.UUID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceStoreResponse): UserServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceStoreResponse;
  static deserializeBinaryFromReader(message: UserServiceStoreResponse, reader: jspb.BinaryReader): UserServiceStoreResponse;
}

export namespace UserServiceStoreResponse {
  export type AsObject = {
    idsList: Array<scoretrak_proto_v1_uuid_pb.UUID.AsObject>;
  };
}

export class UserServiceUpdateRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UserServiceUpdateRequest;
  hasUser(): boolean;
  clearUser(): UserServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceUpdateRequest): UserServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceUpdateRequest;
  static deserializeBinaryFromReader(message: UserServiceUpdateRequest, reader: jspb.BinaryReader): UserServiceUpdateRequest;
}

export namespace UserServiceUpdateRequest {
  export type AsObject = {
    user?: User.AsObject;
  };
}

export class UserServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceUpdateResponse): UserServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceUpdateResponse;
  static deserializeBinaryFromReader(message: UserServiceUpdateResponse, reader: jspb.BinaryReader): UserServiceUpdateResponse;
}

export namespace UserServiceUpdateResponse {
  export type AsObject = {
  };
}

export class UserServiceGetByUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UserServiceGetByUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceGetByUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceGetByUsernameRequest): UserServiceGetByUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: UserServiceGetByUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceGetByUsernameRequest;
  static deserializeBinaryFromReader(message: UserServiceGetByUsernameRequest, reader: jspb.BinaryReader): UserServiceGetByUsernameRequest;
}

export namespace UserServiceGetByUsernameRequest {
  export type AsObject = {
    username: string;
  };
}

export class UserServiceGetByUsernameResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UserServiceGetByUsernameResponse;
  hasUser(): boolean;
  clearUser(): UserServiceGetByUsernameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserServiceGetByUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserServiceGetByUsernameResponse): UserServiceGetByUsernameResponse.AsObject;
  static serializeBinaryToWriter(message: UserServiceGetByUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserServiceGetByUsernameResponse;
  static deserializeBinaryFromReader(message: UserServiceGetByUsernameResponse, reader: jspb.BinaryReader): UserServiceGetByUsernameResponse;
}

export namespace UserServiceGetByUsernameResponse {
  export type AsObject = {
    user?: User.AsObject;
  };
}

export enum Role {
  ROLE_UNSPECIFIED = 0,
  ROLE_BLUE = 1,
  ROLE_RED = 2,
  ROLE_BLACK = 3,
}
