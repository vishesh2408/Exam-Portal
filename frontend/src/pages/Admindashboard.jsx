import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircle, Users, FileSpreadsheet, Settings } from 'lucide-react';

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
];

const mockExams = [
  {
    id: '1',
    title: 'Mathematics Final',
    participants: 45,
    averageScore: 78,
    status: 'active',
  },
  {
    id: '2',
    title: 'Physics Midterm',
    participants: 32,
    averageScore: 72,
    status: 'upcoming',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Card = styled.div`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
`;

const SubHeading = styled.p`
  margin-top: 8px;
  color: #718096;
`;

const TabNav = styled.nav`
  display: flex;
  border-bottom: 1px solid #e2e8f0;
`;

const TabButton = styled.button`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  color: ${({ isActive }) => (isActive ? '#5a67d8' : '#718096')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #5a67d8' : 'none')};
  cursor: pointer;

  &:hover {
    color: #2d3748;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #5a67d8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #4c51bf;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 16px;
    text-align: left;
  }

  th {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #718096;
  }

  tbody tr {
    border-top: 1px solid #e2e8f0;
  }

  tbody tr:last-child {
    border-bottom: 1px solid #e2e8f0;
  }

  tbody td {
    font-size: 14px;
    color: #4a5568;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  background: ${({ status }) =>
    status === 'active' ? '#c6f6d5' : '#faf089'};
  color: ${({ status }) =>
    status === 'active' ? '#276749' : '#975a16'};
`;

export default function Admin() {
  const [activeTab, setActiveTab] = useState('exams');

  return (
    <Container>
      <Card>
        <Heading>Admin Dashboard</Heading>
        <SubHeading>Manage exams, users, and system settings</SubHeading>
      </Card>

      <Card>
        <TabNav>
          <TabButton
            onClick={() => setActiveTab('exams')}
            isActive={activeTab === 'exams'}
          >
            <FileSpreadsheet />
            Exams
          </TabButton>
          <TabButton
            onClick={() => setActiveTab('users')}
            isActive={activeTab === 'users'}
          >
            <Users />
            Users
          </TabButton>
          <TabButton
            onClick={() => setActiveTab('settings')}
            isActive={activeTab === 'settings'}
          >
            <Settings />
            Settings
          </TabButton>
        </TabNav>

        <div>
          {activeTab === 'exams' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Heading>Manage Exams</Heading>
                <Button>
                  <PlusCircle />
                  Create New Exam
                </Button>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Participants</th>
                    <th>Average Score</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockExams.map((exam) => (
                    <tr key={exam.id}>
                      <td>{exam.title}</td>
                      <td>{exam.participants}</td>
                      <td>{exam.averageScore}%</td>
                      <td>
                        <Badge status={exam.status}>{exam.status}</Badge>
                      </td>
                      <td>
                        <Button>Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
          {/* Similar structure for 'users' and 'settings' tabs */}
        </div>
      </Card>
    </Container>
  );
}
