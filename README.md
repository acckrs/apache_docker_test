# apache with my web page autobuilt from github pages [acckrs.github.io](http://acckrs.github.io)

This image will add contents of folder `/acckrs/` to base image of `apache/httpd:2.4 ` at `/usr/local/apache2/htdocs/`

In order to publish web page to port 8787, type 
`docker run -itd -p 8787:8080 acckrs/apache_docker_test`

To pull this docker image type:
`docker pull acckrs/apache_docker_test`
