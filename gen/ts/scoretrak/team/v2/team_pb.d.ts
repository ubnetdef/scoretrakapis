import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_host_v2_host_pb from '../../../scoretrak/host/v2/host_pb'; // proto import: "scoretrak/host/v2/host.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"
import * as scoretrak_user_v2_user_pb from '../../../scoretrak/user/v2/user_pb'; // proto import: "scoretrak/user/v2/user.proto"


export class Team extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): Team;
  hasId(): boolean;
  clearId(): Team;

  getName(): string;
  setName(value: string): Team;

  getHide(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHide(value?: google_protobuf_wrappers_pb.BoolValue): Team;
  hasHide(): boolean;
  clearHide(): Team;

  getPause(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPause(value?: google_protobuf_wrappers_pb.BoolValue): Team;
  hasPause(): boolean;
  clearPause(): Team;

  getHostsList(): Array<scoretrak_host_v2_host_pb.Host>;
  setHostsList(value: Array<scoretrak_host_v2_host_pb.Host>): Team;
  clearHostsList(): Team;
  addHosts(value?: scoretrak_host_v2_host_pb.Host, index?: number): scoretrak_host_v2_host_pb.Host;

  getIndex(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setIndex(value?: google_protobuf_wrappers_pb.UInt64Value): Team;
  hasIndex(): boolean;
  clearIndex(): Team;

  getUsersList(): Array<scoretrak_user_v2_user_pb.User>;
  setUsersList(value: Array<scoretrak_user_v2_user_pb.User>): Team;
  clearUsersList(): Team;
  addUsers(value?: scoretrak_user_v2_user_pb.User, index?: number): scoretrak_user_v2_user_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    name: string;
    hide?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    pause?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    hostsList: Array<scoretrak_host_v2_host_pb.Host.AsObject>;
    index?: google_protobuf_wrappers_pb.UInt64Value.AsObject;
    usersList: Array<scoretrak_user_v2_user_pb.User.AsObject>;
  };
}

export class TeamServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceGetAllRequest): TeamServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: TeamServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceGetAllRequest;
  static deserializeBinaryFromReader(message: TeamServiceGetAllRequest, reader: jspb.BinaryReader): TeamServiceGetAllRequest;
}

export namespace TeamServiceGetAllRequest {
  export type AsObject = {
  };
}

export class TeamServiceGetAllResponse extends jspb.Message {
  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): TeamServiceGetAllResponse;
  clearTeamsList(): TeamServiceGetAllResponse;
  addTeams(value?: Team, index?: number): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceGetAllResponse): TeamServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: TeamServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceGetAllResponse;
  static deserializeBinaryFromReader(message: TeamServiceGetAllResponse, reader: jspb.BinaryReader): TeamServiceGetAllResponse;
}

export namespace TeamServiceGetAllResponse {
  export type AsObject = {
    teamsList: Array<Team.AsObject>;
  };
}

export class TeamServiceGetByIDRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): TeamServiceGetByIDRequest;
  hasId(): boolean;
  clearId(): TeamServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceGetByIDRequest): TeamServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: TeamServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: TeamServiceGetByIDRequest, reader: jspb.BinaryReader): TeamServiceGetByIDRequest;
}

export namespace TeamServiceGetByIDRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class TeamServiceGetByIDResponse extends jspb.Message {
  getTeam(): Team | undefined;
  setTeam(value?: Team): TeamServiceGetByIDResponse;
  hasTeam(): boolean;
  clearTeam(): TeamServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceGetByIDResponse): TeamServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: TeamServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: TeamServiceGetByIDResponse, reader: jspb.BinaryReader): TeamServiceGetByIDResponse;
}

export namespace TeamServiceGetByIDResponse {
  export type AsObject = {
    team?: Team.AsObject;
  };
}

export class TeamServiceDeleteRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): TeamServiceDeleteRequest;
  hasId(): boolean;
  clearId(): TeamServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceDeleteRequest): TeamServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: TeamServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceDeleteRequest;
  static deserializeBinaryFromReader(message: TeamServiceDeleteRequest, reader: jspb.BinaryReader): TeamServiceDeleteRequest;
}

export namespace TeamServiceDeleteRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class TeamServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceDeleteResponse): TeamServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: TeamServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceDeleteResponse;
  static deserializeBinaryFromReader(message: TeamServiceDeleteResponse, reader: jspb.BinaryReader): TeamServiceDeleteResponse;
}

export namespace TeamServiceDeleteResponse {
  export type AsObject = {
  };
}

export class TeamServiceStoreRequest extends jspb.Message {
  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): TeamServiceStoreRequest;
  clearTeamsList(): TeamServiceStoreRequest;
  addTeams(value?: Team, index?: number): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceStoreRequest): TeamServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: TeamServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceStoreRequest;
  static deserializeBinaryFromReader(message: TeamServiceStoreRequest, reader: jspb.BinaryReader): TeamServiceStoreRequest;
}

export namespace TeamServiceStoreRequest {
  export type AsObject = {
    teamsList: Array<Team.AsObject>;
  };
}

export class TeamServiceStoreResponse extends jspb.Message {
  getIdsList(): Array<scoretrak_proto_v1_uuid_pb.UUID>;
  setIdsList(value: Array<scoretrak_proto_v1_uuid_pb.UUID>): TeamServiceStoreResponse;
  clearIdsList(): TeamServiceStoreResponse;
  addIds(value?: scoretrak_proto_v1_uuid_pb.UUID, index?: number): scoretrak_proto_v1_uuid_pb.UUID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceStoreResponse): TeamServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: TeamServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceStoreResponse;
  static deserializeBinaryFromReader(message: TeamServiceStoreResponse, reader: jspb.BinaryReader): TeamServiceStoreResponse;
}

export namespace TeamServiceStoreResponse {
  export type AsObject = {
    idsList: Array<scoretrak_proto_v1_uuid_pb.UUID.AsObject>;
  };
}

export class TeamServiceUpdateRequest extends jspb.Message {
  getTeam(): Team | undefined;
  setTeam(value?: Team): TeamServiceUpdateRequest;
  hasTeam(): boolean;
  clearTeam(): TeamServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceUpdateRequest): TeamServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TeamServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceUpdateRequest;
  static deserializeBinaryFromReader(message: TeamServiceUpdateRequest, reader: jspb.BinaryReader): TeamServiceUpdateRequest;
}

export namespace TeamServiceUpdateRequest {
  export type AsObject = {
    team?: Team.AsObject;
  };
}

export class TeamServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamServiceUpdateResponse): TeamServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: TeamServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamServiceUpdateResponse;
  static deserializeBinaryFromReader(message: TeamServiceUpdateResponse, reader: jspb.BinaryReader): TeamServiceUpdateResponse;
}

export namespace TeamServiceUpdateResponse {
  export type AsObject = {
  };
}

