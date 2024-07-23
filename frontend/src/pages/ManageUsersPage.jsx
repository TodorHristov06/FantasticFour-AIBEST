import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';
import '../styles/manageUsersPage.css';

// Компонент за глобално търсене
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const { t } = useTranslation();
  return (
    <div className="global-filter">
      <label>
        {t('search')}:{' '}
        <input
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value || undefined)}
          placeholder={t('searchAllColumns')}
        />
      </label>
    </div>
  );
};

const ManageUsersPage = () => {
  const { t } = useTranslation();
  const userRole = 'admin';

  const [filterRole, setFilterRole] = useState('All');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    email: '',
    role: 'Student'
  });

  const data = useMemo(
    () => [
      { id: 1, name: 'John Doe', email: 'todorhristov2006@gmail.com', role: 'Student' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: t('id'), accessor: 'id' },
      { Header: t('name'), accessor: 'name' },
      { Header: t('email'), accessor: 'email' },
      { Header: t('role'), accessor: 'role' },
      {
        Header: t('actions'),
        Cell: ({ row }) => (
          <div>
            <button className="edit-button" onClick={() => handleEdit(row.original)}>{t('edit')}</button>
            <button className="reset-password-button" onClick={() => handleResetPassword(row.original)}>{t('resetPassword')}</button>
            <button className="delete-button">{t('delete')}</button>
          </div>
        ),
      },
    ],
    [t]
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
    setCurrentUser({ ...user });
    setIsEditModalOpen(true);
  };

  const handleAdd = () => {
    setNewUser({
      id: '',
      name: '',
      email: '',
      role: 'Student'
    });
    setIsAddModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentUser(null);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewUser({
      id: '',
      name: '',
      email: '',
      role: 'Student'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(t('savedUser'), currentUser);
    handleCloseEditModal();
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddSave = (e) => {
    e.preventDefault();
    console.log(t('addedUser'), newUser);
    handleCloseAddModal();
  };

  // Функция за изпращане на имейл за възстановяване на парола
  const handleResetPassword = (user) => {
    // Заместете с реален API за изпращане на имейл
    console.log(`Sending password reset email to ${user.email}`);
    alert(`Password reset email sent to ${user.email}`);
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="manage-users">
          <h2>{t('manageUsers')}</h2>
          <button className="add-user-button" onClick={handleAdd}>{t('addUser')}</button>
          <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
          <div className="global-filter">
            <label>
              {t('filterByRole')}:
              <select onChange={(e) => setFilterRole(e.target.value)} value={filterRole}>
                <option value="All">{t('all')}</option>
                <option value="Student">{t('student')}</option>
                <option value="Teacher">{t('teacher')}</option>
                <option value="Admin">{t('admin')}</option>
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
        {isEditModalOpen && (
          <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
            <div className="modal-header">{t('editUser')}</div>
            <form className="modal-form" onSubmit={handleSave}>
              <div>
                <label>{t('id')}:</label>
                <input type="text" name="id" value={currentUser?.id} readOnly />
              </div>
              <div>
                <label>{t('name')}:</label>
                <input type="text" name="name" value={currentUser?.name} onChange={handleChange} />
              </div>
              <div>
                <label>{t('email')}:</label>
                <input type="text" name="email" value={currentUser?.email} onChange={handleChange} />
              </div>
              <div>
                <label>{t('role')}:</label>
                <select name="role" value={currentUser?.role} onChange={handleChange}>
                  <option value="Student">{t('student')}</option>
                  <option value="Teacher">{t('teacher')}</option>
                  <option value="Admin">{t('admin')}</option>
                </select>
              </div>
              <button type="submit">{t('save')}</button>
              <button type="button" className="cancel" onClick={handleCloseEditModal}>{t('cancel')}</button>
            </form>
          </Modal>
        )}
        {isAddModalOpen && (
          <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal}>
            <div className="modal-header">{t('addUser')}</div>
            <form className="modal-form" onSubmit={handleAddSave}>
              <div>
                <label>{t('id')}:</label>
                <input type="text" name="id" value={newUser.id} onChange={handleAddChange} />
              </div>
              <div>
                <label>{t('name')}:</label>
                <input type="text" name="name" value={newUser.name} onChange={handleAddChange} />
              </div>
              <div>
                <label>{t('email')}:</label>
                <input type="text" name="email" value={newUser.email} onChange={handleAddChange} />
              </div>
              <div>
                <label>{t('role')}:</label>
                <select name="role" value={newUser.role} onChange={handleAddChange}>
                  <option value="Student">{t('student')}</option>
                  <option value="Teacher">{t('teacher')}</option>
                  <option value="Admin">{t('admin')}</option>
                </select>
              </div>
              <button type="submit">{t('addUser')}</button>
              <button type="button" className="cancel" onClick={handleCloseAddModal}>{t('cancel')}</button>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ManageUsersPage;
