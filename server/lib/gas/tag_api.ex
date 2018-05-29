defmodule Gas.TagApi do
  @moduledoc """
  The Tags context.
  """

  import Ecto.Query, warn: false
  alias Gas.Repo

  alias Gas.Tag

  @doc """
  Returns the list of tags.

  ## Examples

      iex> list()
      [%Tag{}, ...]

  """
  def list do
    Repo.all(Tag)
  end

  @doc """
  Gets a single tag.

  Raises `Ecto.NoResultsError` if the Tag does not exist.

  ## Examples

      iex> get!(123)
      %Tag{}

      iex> get!(456)
      ** (Ecto.NoResultsError)

  """
  def get!(id), do: Repo.get!(Tag, id)

  @doc """
  Creates a tag.

  ## Examples

      iex> create_(%{field: value})
      {:ok, %Tag{}}

      iex> create_(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_(attrs \\ %{}) do
    %Tag{}
    |> Tag.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a tag.

  ## Examples

      iex> update_(tag, %{field: new_value})
      {:ok, %Tag{}}

      iex> update_(tag, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_(%Tag{} = tag, attrs) do
    tag
    |> Tag.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Tag.

  ## Examples

      iex> delete_(tag)
      {:ok, %Tag{}}

      iex> delete_(tag)
      {:error, %Ecto.Changeset{}}

  """
  def delete_(%Tag{} = tag) do
    Repo.delete(tag)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking tag changes.

  ## Examples

      iex> change_(tag)
      %Ecto.Changeset{source: %Tag{}}

  """
  def change_(%Tag{} = tag) do
    Tag.changeset(tag, %{})
  end
end
