import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as scoretrak_check_v2_check_pb from '../../../scoretrak/check/v2/check_pb'; // proto import: "scoretrak/check/v2/check.proto"


export class Round extends jspb.Message {
  getId(): number;
  setId(value: number): Round;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): Round;
  hasStart(): boolean;
  clearStart(): Round;

  getNote(): string;
  setNote(value: string): Round;

  getErr(): string;
  setErr(value: string): Round;

  getFinish(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinish(value?: google_protobuf_timestamp_pb.Timestamp): Round;
  hasFinish(): boolean;
  clearFinish(): Round;

  getChecksList(): Array<scoretrak_check_v2_check_pb.Check>;
  setChecksList(value: Array<scoretrak_check_v2_check_pb.Check>): Round;
  clearChecksList(): Round;
  addChecks(value?: scoretrak_check_v2_check_pb.Check, index?: number): scoretrak_check_v2_check_pb.Check;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Round.AsObject;
  static toObject(includeInstance: boolean, msg: Round): Round.AsObject;
  static serializeBinaryToWriter(message: Round, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Round;
  static deserializeBinaryFromReader(message: Round, reader: jspb.BinaryReader): Round;
}

export namespace Round {
  export type AsObject = {
    id: number;
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    note: string;
    err: string;
    finish?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    checksList: Array<scoretrak_check_v2_check_pb.Check.AsObject>;
  };
}

export class RoundServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetAllRequest): RoundServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetAllRequest;
  static deserializeBinaryFromReader(message: RoundServiceGetAllRequest, reader: jspb.BinaryReader): RoundServiceGetAllRequest;
}

export namespace RoundServiceGetAllRequest {
  export type AsObject = {
  };
}

export class RoundServiceGetAllResponse extends jspb.Message {
  getRoundsList(): Array<Round>;
  setRoundsList(value: Array<Round>): RoundServiceGetAllResponse;
  clearRoundsList(): RoundServiceGetAllResponse;
  addRounds(value?: Round, index?: number): Round;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetAllResponse): RoundServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetAllResponse;
  static deserializeBinaryFromReader(message: RoundServiceGetAllResponse, reader: jspb.BinaryReader): RoundServiceGetAllResponse;
}

export namespace RoundServiceGetAllResponse {
  export type AsObject = {
    roundsList: Array<Round.AsObject>;
  };
}

export class RoundServiceGetByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RoundServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetByIDRequest): RoundServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: RoundServiceGetByIDRequest, reader: jspb.BinaryReader): RoundServiceGetByIDRequest;
}

export namespace RoundServiceGetByIDRequest {
  export type AsObject = {
    id: number;
  };
}

export class RoundServiceGetByIDResponse extends jspb.Message {
  getRound(): Round | undefined;
  setRound(value?: Round): RoundServiceGetByIDResponse;
  hasRound(): boolean;
  clearRound(): RoundServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetByIDResponse): RoundServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: RoundServiceGetByIDResponse, reader: jspb.BinaryReader): RoundServiceGetByIDResponse;
}

export namespace RoundServiceGetByIDResponse {
  export type AsObject = {
    round?: Round.AsObject;
  };
}

export class RoundServiceGetLastRoundRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetLastRoundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetLastRoundRequest): RoundServiceGetLastRoundRequest.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetLastRoundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetLastRoundRequest;
  static deserializeBinaryFromReader(message: RoundServiceGetLastRoundRequest, reader: jspb.BinaryReader): RoundServiceGetLastRoundRequest;
}

export namespace RoundServiceGetLastRoundRequest {
  export type AsObject = {
  };
}

export class RoundServiceGetLastRoundResponse extends jspb.Message {
  getRound(): Round | undefined;
  setRound(value?: Round): RoundServiceGetLastRoundResponse;
  hasRound(): boolean;
  clearRound(): RoundServiceGetLastRoundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetLastRoundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetLastRoundResponse): RoundServiceGetLastRoundResponse.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetLastRoundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetLastRoundResponse;
  static deserializeBinaryFromReader(message: RoundServiceGetLastRoundResponse, reader: jspb.BinaryReader): RoundServiceGetLastRoundResponse;
}

export namespace RoundServiceGetLastRoundResponse {
  export type AsObject = {
    round?: Round.AsObject;
  };
}

export class RoundServiceGetLastNonElapsingRoundRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetLastNonElapsingRoundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetLastNonElapsingRoundRequest): RoundServiceGetLastNonElapsingRoundRequest.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetLastNonElapsingRoundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetLastNonElapsingRoundRequest;
  static deserializeBinaryFromReader(message: RoundServiceGetLastNonElapsingRoundRequest, reader: jspb.BinaryReader): RoundServiceGetLastNonElapsingRoundRequest;
}

export namespace RoundServiceGetLastNonElapsingRoundRequest {
  export type AsObject = {
  };
}

export class RoundServiceGetLastNonElapsingRoundResponse extends jspb.Message {
  getRound(): Round | undefined;
  setRound(value?: Round): RoundServiceGetLastNonElapsingRoundResponse;
  hasRound(): boolean;
  clearRound(): RoundServiceGetLastNonElapsingRoundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundServiceGetLastNonElapsingRoundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoundServiceGetLastNonElapsingRoundResponse): RoundServiceGetLastNonElapsingRoundResponse.AsObject;
  static serializeBinaryToWriter(message: RoundServiceGetLastNonElapsingRoundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundServiceGetLastNonElapsingRoundResponse;
  static deserializeBinaryFromReader(message: RoundServiceGetLastNonElapsingRoundResponse, reader: jspb.BinaryReader): RoundServiceGetLastNonElapsingRoundResponse;
}

export namespace RoundServiceGetLastNonElapsingRoundResponse {
  export type AsObject = {
    round?: Round.AsObject;
  };
}

