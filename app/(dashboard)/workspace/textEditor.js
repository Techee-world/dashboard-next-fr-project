import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react'; 


export default function TinyMCEEditor() {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    return (
      <>
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<title>Legal Battle: Sea Carriage - Loss of Goods</title>
          </head>
          <body>
          <h1>Legal Battle: Sea Carriage - Loss of Goods</h1>
          <p><strong>Client:</strong> Sam J. Mark</p>
          <p><strong>Case Overview:</strong></p>
          <p>Sam J. Mark, represented by the undersigned advocate, is embroiled in a legal battle concerning the loss of goods during sea carriage. Mr. Mark, a reputable business owner, entrusted a consignment of valuable goods for transportation via sea freight. However, upon arrival at the designated destination, a substantial portion of the goods were discovered to be missing, leading to <b>severe financial losses</b> for Mr. Mark.</p>
          <p><strong>Legal Proceedings:</strong></p>
          <p>Mr. Mark, upon discovering the loss of goods, initiated legal proceedings against the shipping company responsible for the carriage. The case involves thorough investigation and documentation to establish liability on the part of the shipping company for the loss incurred during transit. The legal battle is centered around proving negligence, breach of contract, or any other legal grounds to hold the shipping company accountable for the loss.</p>
          <p><strong>Compensation Sought:</strong></p>
          <p>Considering the magnitude of the financial loss suffered by Mr. Mark due to the negligence or misconduct of the shipping company, the compensation sought amounts to <b>$500,000</b>. This figure encompasses the value of the lost goods, additional costs incurred as a result of the loss, and compensation for the consequential damages suffered by Mr. Mark's business.</p>
          <p><strong>Conclusion:</strong></p>
          <p>The legal battle surrounding the loss of goods during sea carriage is ongoing, with the advocate diligently representing Mr. Mark's interests to ensure just compensation for the losses incurred. This case underscores the importance of accountability and adherence to contractual obligations in the realm of sea freight transportation.</p>
          </body>"
          apiKey="oo6w0w3gnjwt34wegrv98e19i8ah8lc0e4qbcexyi8f1dzdf" // Replace with your TinyMCE API key - apiKey
          init={{
            height: 500,
            menubar: false,
            plugins: [
                          'advlist autolink lists link image',
                          'charmap print preview anchor help',
                          'searchreplace visualblocks code',
                          'insertdatetime media table paste wordcount'
                        ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}  >Save</button> 
      </>
    );
  }