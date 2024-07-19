import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';
import '../styles/manageUsersPage.css';

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="global-filter">
      <label>
        Search:{' '}
        <input
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value || undefined)}
          placeholder="Search all columns"
        />
      </label>
    </div>
  );
};

const ManageUsersPage = () => {
  const userRole = 'admin';

  const [filterRole, setFilterRole] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const data = useMemo(
    () => [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Role', accessor: 'role' },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button className="edit-button" onClick={() => handleEdit(row.original)}>Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        ),
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (filterRole === 'All') return data;
    return data.filter(user => user.role === filterRole);
  }, [data, filterRole]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data: filteredData }, useFilters, useGlobalFilter, useSortBy);

  const handleEdit = (user) => {
    setCurrentUser({ ...user }); // Използвай текущия потребител за редактиране
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Запази промените тук. Например, изпрати данните на сървъра.
    console.log('Saved user:', currentUser);
    handleCloseModal();
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="manage-users">
          <h2>Manage Users</h2>
          <button className="add-user-button">Add User</button>
          <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
          <div className="global-filter">
            <label>
              Filter by role:
              <select onChange={(e) => setFilterRole(e.target.value)} value={filterRole}>
                <option value="All">All</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </label>
          </div>
          <table className="users-table" {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map(column => {
                    const sortClass = column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : '';
                    return (
                      <th 
                        {...column.getHeaderProps(column.getSortByToggleProps())} 
                        key={column.id} 
                        className={sortClass}
                      >
                        {column.render('Header')}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.original.id}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} key={cell.column.id}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="modal-header">Edit User</div>
            <form className="modal-form" onSubmit={handleSave}>
              <div>
                <label>ID:</label>
                <input type="text" name="id" value={currentUser?.id} readOnly />
              </div>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={currentUser?.name} onChange={handleChange} />
              </div>
              <div>
                <label>Email:</label>
                <input type="text" name="email" value={currentUser?.email} onChange={handleChange} />
              </div>
              <div>
                <label>Role:</label>
                <select name="role" value={currentUser?.role} onChange={handleChange}>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <button type="submit">Save</button>
              <button type="button" className="cancel" onClick={handleCloseModal}>Cancel</button>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ManageUsersPage;
