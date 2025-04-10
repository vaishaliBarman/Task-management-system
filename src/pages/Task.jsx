import '../styles/Task.css';
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaPlus, FaSave, FaSignOutAlt } from "react-icons/fa";

function Task() {
  const [task, setTask] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) return;

    if (editId !== null) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editId ? { ...t, ...task } : t
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        ...task,
        id: Date.now(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTask({ title: "", description: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleEdit = (task) => {
    setTask({ title: task.title, description: task.description });
    setEditId(task.id);
    setShowForm(true);
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      )
    );
  };

  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="container-fluid">
      

      {/* Form Modal */}
      {showForm && (
        <div className={`position-fixed top-0 start-0 w-100 h-100 bg-transparent d-flex align-items-center justify-content-center z-3`}>

          <form onSubmit={handleAddTask} className="modal-form p-3 rounded shadow" style={{ width: "90%", maxWidth: "500px" }}>
            <h4 className="text-center ">{editId !== null ? "Edit Task" : "Add Task"}</h4>
            <div className="mb-1">
              <label className="form-label">Title</label>
              <input type="text" name="title" className="form-control" value={task.title} onChange={handleChange} required />
            </div>
            <div className="mb-1">
              <label className="form-label">Description</label>
              <textarea name="description" className="form-control" rows="3" value={task.description} onChange={handleChange} required></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success w-50 me-2"><FaSave /> {editId !== null ? "Save Changes" : "Add Task"}</button>
              <button type="button" className="btn btn-secondary w-50" onClick={() => {
                setTask({ title: "", description: "" });
                setEditId(null);
                setShowForm(false);
              }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="row mt-4">
        {/* Pending Tasks */}
        <div className="col-md-6 ">
          <div className=" bg-opacity-2 ">
            <h4 className="text-center text-danger">Pending Tasks</h4>
            {pendingTasks.length === 0 ? (
              <p className="text-muted text-center">No pending tasks.</p>
            ) : (
              pendingTasks.map((t, i) => (
                <div key={t.id} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{i + 1}. {t.title}</h5>
                    <p>{t.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content">
                    <button className="btn btn" onClick={() => handleEdit(t)}><FaEdit /></button>
                    <button className="btn btn" onClick={() => handleComplete(t.id)}><FaCheckCircle /></button>
                    <button className="btn btn" onClick={() => handleDelete(t.id)}><FaTrash /></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="col-md-6 ">
          <div className=" bg-opacity-2">
            <h4 className="text-center text-success">Completed Tasks</h4>
            {completedTasks.length === 0 ? (
              <p className="text-muted text-center">No completed tasks.</p>
            ) : (
              completedTasks.map((t, i) => (
                <div key={t.id} className="card mb-3 shadow-sm border-success">
                  <div className="card-body">
                    <h5 className="card-title">{i + 1}.  {t.title}</h5>
                    <p>{t.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button className="btn btn" onClick={() => handleDelete(t.id)}><FaTrash /></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
  {/* Decorative Floating Bubbles */}
  {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute bubble"
            style={{
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius: "50%",
              border: `2px solid ${["#ff0000", "#facc15", "#a0522d"][i % 3]}`, // red, yellow, brown
              opacity: 0.6,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
            }}
          ></div>
        ))}
  
        {/* Bubble Animation Style */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
          `}
        </style>
        
      {/* FAB Button */}
      <button
        onClick={() => setShowForm(true)}
        className="custom-circle-btn animated-dash justify-content-center align-items-center position-fixed bottom-0 end-0 m-3 shadow"
        title="Add Task"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
}

export default Task;
