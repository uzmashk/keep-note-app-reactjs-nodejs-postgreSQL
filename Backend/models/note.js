const noteModel = (sequelize, Sequelize) => {
    const Note = sequelize.define("note", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });

    return Note;
}

  
  module.exports = noteModel;