import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Marketplace Metrics Dashboard</h1>
      <h2>Current Queue:</h2>
      <div class="row clearfix blue-border">
        <div class="span_5 column">
          Not Started<div value="">[]</div>
        </div>
        <div class="span_5 column">
          In Fn Review<div value="">[]</div>
        </div>
        <div class="span_5 column">
          Await SEC Review<div value="">[]</div>
        </div>
        <div class="span_5 column">
          In SEC Review<div value="">[]</div>
        </div>
        <div class="span_5 column">
          Done<div value="">[]</div>
        </div>
      </div>
      <h2>Processed App Reports</h2>
      <form>
        <label>
          Start Date:
          <input type="text" name="name" />
        </label>
        <label>
          End Date:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Pull Report" />
      </form>
      <h3>Optional Filters</h3>

      <div class="row clearfix">
        <div class="span_3 column">
          <label>
            Team:
            <select name="selectedFruit">
              <option value="team-all">All</option>
              <option value="fn">FN</option>
              <option value="sec">SEC</option>
            </select>
          </label>
        </div>
        <div class="span_3 column">
          <label>
            Reviewer:
            <select name="selectedFruit">
              <option value="reviewer-all">All</option>
              <option value="abe">Abe</option>
              <option value="ben">Ben</option>
              <option value="kwaku">Kwaku</option>
              <option value="yoon">Yoon</option>
              <option value="nigel">Nigel</option>
              <option value="virginie">Virginie</option>
              <option value="cat">Catalina</option>
            </select>
          </label>
        </div>
        <div class="span_3 column">
          <label>
            Request:
            <select name="selectedFruit">
              <option value="request-all">All</option>
              <option value="create">CREATE</option>
              <option value="update">UPDATE</option>
              <option value="removal-unpublish">REM + UNPUB</option>
              <option value="enable">ENABLE</option>
            </select>
          </label>
        </div>
      </div>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column">
          Time Taken in Days from Submit to Publish
        </div>
        <div class="span_3 column blue-border" value="">
          Average<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Median<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Mode<div value="">[]</div>
        </div>
      </div>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column ">
          Time Taken in Days from Submit to First Review
        </div>
        <div class="span_3 column blue-border" value="">
          Average<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Median<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Mode<div value="">[]</div>
        </div>
      </div>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column ">
          Number of Times App was Submittied before Publish
        </div>
        <div class="span_3 column blue-border" value="">
          Average<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Median<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Mode<div value="">[]</div>
        </div>
      </div>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column">Number of Apps Processed</div>
        <div class="span_3 column blue-border" value="">
          Average<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Median<div value="">[]</div>
        </div>
        <div class="span_3 column blue-border" value="">
          Mode<div value="">[]</div>
        </div>
      </div>
      <h1></h1>
      <h1>~~~~~~~~~~~~~~~~~~</h1>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column">
          Total Number of Days in Review for Published Apps
        </div>
        <div class="span_1 column blue-border left-text" value="">
          App 1
        </div>
        <div class="span_1 column blue-border left-text" value="">
          App 2
        </div>
        <div class="span_1 column blue-border left-text" value="">
          App 3
        </div>
      </div>
      <h1></h1>
      <h1>~~~~~~~~~~~~~~~~~~</h1>
      <h1></h1>
      <h1></h1>
      <h2>Tableau Improvements:</h2>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column">Days with Zoom</div>
        <div class="span_3 column blue-border" value="">
          Average
        </div>
        <div class="span_3 column blue-border" value="">
          Median
        </div>
        <div class="span_3 column blue-border" value="">
          Mode
        </div>
      </div>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column">Days with Developer</div>
        <div class="span_3 column blue-border" value="">
          Average
        </div>
        <div class="span_3 column blue-border" value="">
          Median
        </div>
        <div class="span_3 column blue-border" value="">
          Mode
        </div>
      </div>
      <h1></h1>
      <div class="row clearfix border">
        <div class="span_1 column">Days to Complete Review</div>
        <div class="span_3 column blue-border" value="">
          Average
        </div>
        <div class="span_3 column blue-border" value="">
          Median
        </div>
        <div class="span_3 column blue-border" value="">
          Mode
        </div>
      </div>
    </div>
  );
}
