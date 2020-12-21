export class Profils {
  id: number;
  libelle: string;
  archive: boolean;
  constructor(id: number, libelle: string, archive: boolean) {
    this.id = id;
    this.libelle = libelle;
    this.archive = archive;
  }
}
