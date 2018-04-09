defmodule Tasktracker3.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string, null: false

      timestamps()
    end

  end
end
