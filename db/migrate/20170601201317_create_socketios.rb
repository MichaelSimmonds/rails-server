class CreateSocketios < ActiveRecord::Migration[5.0]
  def change
    create_table :socketios do |t|
      t.datetime :timestamp
      t.float :hkld

      t.timestamps
    end
  end
end
