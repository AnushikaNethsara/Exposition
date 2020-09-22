import React, { Component } from 'react';
import guidlines from '../iuac/guideLine.pdf';

class Artical extends Component {
  state = {  }
  render() {
    return (
      <div className="guidelines">
        <h4 className="guide">Guidelines</h4>
        <p className="details">
          Theme : Effect of the Covid-19 pandemic on the IT and Management sectors.<br/>
          Topics can be under the following categories,<br/>




          Poster <br/>
          theme <br/>
          organized by imssa, (about exposition) <br/>
          (those eligible to participate) <br/>
          Registration : through website before…… <br/>
          prizes, the 3 winning articles will be featured in exposition 2020 (link) <br/>
          (further guidelines will be provided in the website) <br/>


          Articles should meet following requirements. <br/>
          • Entrepreneurship, Management and IT are the Themes of the Exposition 2020.Consider these themes when writing the articles. <br/>
          • Articles should be written in good English (UK) <br/>
          • Articles should be approximately 1300-1500 in length. This may not include images, links, quoted texts etc. <br/>
          <br/><br/>
          {/*<span className="learn">Learn More...</span>*/}
            <a src={guidlines} alt=""></a>
            <a href={guidlines} download>
              <span className="btn btn-indigo btn-lg" style={{float:"right",color: "rgb(0, 255, 255)"}} >Learn More...</span>
            </a>



          {/*• Articles should be written as continuous narrative in a chapter or article style, not as lists of points. <br/>*/}
          {/*• Structure of the texts should be relatively formal. • Do not mix the tenses if the state or the timeframe is same. <br/>*/}
          {/*• Articles should be well-researched and therefore should cover unique areas. <br/>*/}
          {/*• Plagiarism is prohibited. Reproduced information from the web is not accepted. <br/>*/}
          {/*• Articles should be your own original work. You can quote/include other people’s works so long you include correct citations, <br/>*/}
          {/*references and attributions and their work is not plagiarised, or copyright protected.  <br/>*/}
          {/*i.e. You may include all the sources of the article in a separate document along with a brief summary about the article. <br/>*/}
          {/*• Facts and claims should be verifiable. <br/>*/}
          {/*• Articles should represent viewpoints fairly and without bias and be focused on the main topic. <br/>*/}
          {/*• Articles should be provided with a concise and specific title that clearly reflects the content of the article. <br/>*/}
          {/*• Articles should be illustrated with appropriate and high resolution (300 dpi) images. <br/>*/}
          {/*• Avoid Clip Arts at all purposes. You may use graphs, charts and other graphical tools. <br/>*/}
          {/*• Images should be placed in a separate folder and renamed according to the purpose of it to the article. (Self-explanatory) <br/>*/}
          {/*i.e. The image should be named based on its purpose and the part where it is intended to use should be mentioned. <br/>*/}
          {/*If graphs or charts are used, the name should contain the purpose and what it shows. <br/>*/}
          {/*• Scores will be based on; -Grammar Correctness -Clarity -Content and Organization -Engagement Level -Plagiarism free -Spelling Check <br/>*/}
          {/*• The Submission DDL is ……………………………. (Late Submissions: …… marks will be deducted?) <br/>*/}


        </p>
      </div>

    );
  }
}

export default Artical;
