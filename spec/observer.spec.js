const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const JobPostings = require('../src/observer');
const JobPost = require('../src/job-post');
const JobSeeker = require('../src/job-seeker');

const sandbox = sinon.createSandbox();

chai.use(sinonChai);

const jobPostings = new JobPostings();

describe('#Observers', function() {
  beforeEach(async () => {
    sandbox.stub(jobPostings, 'notify');
  });

  afterEach(async () => {
    sandbox.restore();
  });

  it('should add new user to observers array', function() {
    const jobPostings = new JobPostings();
    const seekerMark = new JobSeeker('Mark');

    jobPostings.subscribe(seekerMark);
    expect(jobPostings.observers[0]).to.equal(seekerMark);
  });

  it('should remove user from observers array', function() {
    const jobPostings = new JobPostings();
    const seekerMark = new JobSeeker('Mark');

    jobPostings.subscribe(seekerMark);
    expect(jobPostings.observers[0].name).to.equal('Mark');

    jobPostings.remove(seekerMark);
    expect(jobPostings.observers.length).to.equal(0);
  });

  it('should call "notify" to send notification if we have new job', function() {
    const newJob = new JobPost('Full stack JS');

    jobPostings.addJob(newJob);
    expect(jobPostings.notify).to.have.been.calledOnceWith(newJob);
  });
});
