import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';


@Table
export class FeedItem extends Model<FeedItem> {
  @Column
  public species!: string;

  @Column
  public diameter!: string;
  @Column
  public length!: string;
  @Column
  public price!: string;      

  @Column
  public url!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
