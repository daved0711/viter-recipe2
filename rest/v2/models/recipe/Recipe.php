<?php
class Recipe
{
    public $recipe_aid;
    public $recipe_title;
    public $recipe_category;
    public $recipe_level;
    public $recipe_serving;
    public $recipe_prep_time;
    public $recipe_image;
    public $recipe_ingredients;
    public $recipe_description;
    public $recipe_instruction;
    public $recipe_is_active;
    public $recipe_datetime;
    public $recipe_created;

    public $category_aid;
    public $category_is_active;
    public $category_image;
    public $category_title;
    public $category_datetime;
    public $category_created;

    public $level_aid;
    public $level_is_active;
    public $level_image;
    public $level_title;
    public $level_datetime;
    public $level_created;

    public $connection;
    public $lastInsertedId;

    public $tblrecipe;
    public $tblcategory;
    public $tbllevel;

    public $recipe_start;
    public $recipe_total;
    public $recipe_search;

    public $category_start;
    public $category_total;
    public $category_search;

    public $level_start;
    public $level_total;
    public $level_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblrecipe = "recipe";
        $this->tblcategory = "recipe_category";
        $this->tbllevel = "recipe_level";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblrecipe} ";
            $sql .= "(recipe_title, ";
            $sql .= "recipe_is_active, ";
            $sql .= "recipe_category, ";
            $sql .= "recipe_level, ";
            $sql .= "recipe_serving, ";
            $sql .= "recipe_prep_time, ";
            $sql .= "recipe_image, ";
            $sql .= "recipe_ingredients, ";
            $sql .= "recipe_description, ";
            $sql .= "recipe_instruction, ";
            $sql .= "recipe_datetime, ";
            $sql .= "recipe_created ) values ( ";
            $sql .= ":recipe_title, ";
            $sql .= ":recipe_is_active, ";
            $sql .= ":recipe_category, ";
            $sql .= ":recipe_level, ";
            $sql .= ":recipe_serving, ";
            $sql .= ":recipe_prep_time, ";
            $sql .= ":recipe_image, ";
            $sql .= ":recipe_ingredients, ";
            $sql .= ":recipe_description, ";
            $sql .= ":recipe_instruction, ";
            $sql .= ":recipe_datetime, ";
            $sql .= ":recipe_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => $this->recipe_title,
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_category" => $this->recipe_category,
                "recipe_level" => $this->recipe_level,
                "recipe_serving" => $this->recipe_serving,
                "recipe_prep_time" => $this->recipe_prep_time,
                "recipe_image" => $this->recipe_image,
                "recipe_ingredients" => $this->recipe_ingredients,
                "recipe_description" => $this->recipe_description,
                "recipe_instruction" => $this->recipe_instruction,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_created" => $this->recipe_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblrecipe} as myRecipe, ";
            $sql .= "{$this->tblcategory} as myCategory, ";
            $sql .= "{$this->tbllevel} as myLevel ";
            $sql .= "where myCategory.category_aid = myRecipe.recipe_category ";
            $sql .= "and myLevel.level_aid = myRecipe.recipe_level ";
            $sql .= "order by myRecipe.recipe_is_active desc, ";
            $sql .= "myRecipe.recipe_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblrecipe} as myRecipe, ";
            $sql .= "{$this->tblcategory} as myCategory, ";
            $sql .= "{$this->tbllevel} as myLevel ";
            $sql .= "where ";   
            $sql .= "myCategory.category_aid = myRecipe.recipe_category ";
            $sql .= "and myLevel.level_aid = myRecipe.recipe_level ";
            $sql .= "order by myRecipe.recipe_is_active desc, ";
            $sql .= "myRecipe.recipe_aid asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->recipe_start - 1,
                "total" => $this->recipe_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblrecipe} as searchRecipe, ";
            $sql .= "{$this->tbllevel} as searchLevel, ";
            $sql .= "{$this->tblcategory} as searchCategory ";
            $sql .= "where recipe_title like :recipe_title ";
            $sql .= "and searchCategory.category_aid = searchRecipe.recipe_category ";
            $sql .= "and searchLevel.level_aid = searchRecipe.recipe_level ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "%{$this->recipe_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterActive()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "where recipe_is_active = :recipe_is_active ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_is_active ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_is_active" => $this->recipe_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function filterActiveSearch()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "where recipe_is_active = :recipe_is_active ";
            $sql .= "and recipe_title like :recipe_title ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_title" => "%{$this->recipe_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "where recipe_aid  = :recipe_aid ";
            $sql .= "order by recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblrecipe} set ";
            $sql .= "recipe_title = :recipe_title, ";
            $sql .= "recipe_category = :recipe_category, ";
            $sql .= "recipe_level = :recipe_level, ";
            $sql .= "recipe_serving = :recipe_serving, ";
            $sql .= "recipe_prep_time = :recipe_prep_time, ";
            $sql .= "recipe_image = :recipe_image, ";
            $sql .= "recipe_ingredients = :recipe_ingredients, ";
            $sql .= "recipe_description = :recipe_description, ";
            $sql .= "recipe_instruction = :recipe_instruction, ";
            $sql .= "recipe_datetime = :recipe_datetime ";
            $sql .= "where recipe_aid = :recipe_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => $this->recipe_title,
                "recipe_category" => $this->recipe_category,
                "recipe_level" => $this->recipe_level,
                "recipe_serving" => $this->recipe_serving,
                "recipe_prep_time" => $this->recipe_prep_time,
                "recipe_image" => $this->recipe_image,
                "recipe_ingredients" => $this->recipe_ingredients,
                "recipe_description" => $this->recipe_description,
                "recipe_instruction" => $this->recipe_instruction,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblrecipe} set ";
            $sql .= "recipe_is_active = :recipe_is_active, ";
            $sql .= "recipe_datetime = :recipe_datetime ";
            $sql .= "where recipe_aid = :recipe_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblrecipe} ";
            $sql .= "where recipe_aid = :recipe_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select recipe_title from {$this->tblrecipe} ";
            $sql .= "where recipe_title = :recipe_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "{$this->recipe_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkAssociation()
    {
        try {
            $sql = "select product_recipe_id from {$this->tblrecipe} ";
            $sql .= "where product_recipe_id = :product_recipe_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "product_recipe_id" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblrecipe} ";
            $sql .= "where recipe_is_active = :recipe_is_active  ";
            $sql .= "order by recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_is_active" => $this->recipe_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblrecipe} ";
            $sql .= "where ";
            $sql .= "recipe_is_active = :recipe_is_active ";
            $sql .= "and recipe_title like :recipe_title ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "%{$this->recipe_search}%",
                "recipe_is_active" => $this->recipe_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}