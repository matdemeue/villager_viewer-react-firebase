import React from 'react';

const VillagerSearch = ({searchVillager}) => {

  const handleSubmit = (ev) => {
    searchVillager(ev.target.value);
  };

  return (
    <div className="col-12">
        <form className="todo-form" onChange={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Villager Searcher</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text" required placeholder="Search for a villager ..." />
        </div>
        </form>
    </div>
  );
};

export default VillagerSearch;