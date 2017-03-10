FROM tomcat

ADD tomcat-users.xml /usr/local/tomcat/conf/
ADD manager.xml /usr/local/tomcat/conf/Catalina/localhost/
ADD acckrs.war /usr/local/tomcat/webapps/
