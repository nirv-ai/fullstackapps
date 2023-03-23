export interface VaultSealStatusInterface {
  initialized: boolean;
  sealed: boolean;
  [x: string]: unknown;
}

export interface VaultResponseInterface {
  auth?: unknown;
  data?: Record<string, unknown>;
  lease_duration?: number;
  lease_id?: string;
  renewable?: boolean;
  request_id?: string;
  warnings?: string | null;
  wrap_info?: string | null;
}
export interface VaultCredentialsInterface extends VaultResponseInterface {
  renewable: boolean;
  auth: {
    client_token: string;
    accessor: string;
    metadata: {
      role_name: string;
      lease_duration: number;
      renewable: boolean;
      entity_id: string;
      num_uses: number;
    };
  };
}

export interface VaultPgCredsInterface extends VaultResponseInterface {
  data: {
    password: string;
    username: string;
  };
}

export interface VaultBffSecretsInterface extends VaultResponseInterface {
  request_id: string;
  lease_id: string;
  renewable: boolean;
  lease_duration: number;
  data: {
    DEFAULT_DB: string;
    DEFAULT_DB_HOST: string;
    DB_CORE_MAX_CONN: string;
    WEB_POSTGRES_PORT: string;
  };
  wrap_info: null;
  warnings: null;
  auth: null;
}
