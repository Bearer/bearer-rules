package file;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

public class foo {
    public void bad(HttpServletRequest request) throws FileUploadException {
        ServletFileUpload upload = new ServletFileUpload();
        List<FileItem> fileItems = upload.parseRequest(request);

        for (FileItem item : fileItems) {
          // bearer:expected java_lang_file_upload_filename
          String badFileName = item.getName();
          // ok - sanitized
          String okFileName = FilenameUtils.getName(item.getName());
          //...
        }
    }
}
