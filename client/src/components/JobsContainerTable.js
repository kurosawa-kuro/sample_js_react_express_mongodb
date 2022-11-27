import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
// import Job from './Job';
import JobTable from './JobTable';
import Alert from './Alert';
import Wrapper from '../assets/wrappers/JobsContainerTable';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className=''>

        <table>
          <tbody>
            <tr>
              <th className='th-label'>position</th>
              <th className='th-label'>company</th>
              <th className='th-label'>jobLocation</th>
              <th className='th-label'>date</th>
              <th className='th-label'>jobType</th>
              <th className='th-label'>status</th>
              <th colSpan="3" className='th-label'>Action</th>

            </tr>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td><span className='text'>{job.position}</span></td>
                <td><span className='text'>{job.company}</span></td>
                <td><span className='text'>{job.jobLocation}</span></td>
                <td><span className='text'>{job.createdAt}</span></td>
                <td><span className='text'>{job.jobType}</span></td>
                <td><span className='text'>{job.status}</span></td>
                <td><span className='btn show-btn'>Show</span></td>
                <td><span className='btn edit-btn'>Edit</span></td>
                <td><span className='btn delete-btn'>Delete</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {jobs.map((job) => {
          return <JobTable key={job._id} {...job} />;
        })} */}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
