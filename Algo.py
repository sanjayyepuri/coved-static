
class mentorAccount:
    def __init__(self, firstName, lastName, email, password, partnered, subject, ageMax, ageMin, score, priority, taken):
        self.firstName = firstName
        self.last_name = lastName
        self.email = email
        self.password = password
        self.partnered = partnered
        self.subject = subject
        self.ageMax = ageMax
        self.ageMin = ageMin 
        self.score = score
class menteeAccount:
    def __init__(self, firstName, lastName, email, password, partnered, subject, age):
        self.firstName = firstName
        self.last_name = lastName
        self.email = email
        self.password = password
        self.partnered = partnered
        self.subject = subject  
        self.age = age      
def ageMatchmaking(mentee, mentorList):
    for mentor in mentorList:
        mentor.score=0
        if mentee.age > mentor.ageMax:
            mentor.score-=8
        if mentee.age > mentor.ageMax:
            mentor.score+=8
        if mentee.age < mentor.ageMin:
            mentor.score-=8
        if mentee.age > mentor.ageMin:
            mentor.score+=8
    mentorList.sort(key=lambda mentor: mentor.score, reverse=False)
    newlist = sorted(mentorList, key=lambda mentor: mentor.score, reverse=False)
    return(newlist)
def subjectMatchmaking(mentee, mentorList):
    for mentor in mentorList:
        if mentor.subject == mentee.subject:
            mentor.score+=3
    mentorList.sort(key=lambda mentor: mentor.score, reverse=False)
    newlist = sorted(mentorList, key=lambda mentor: mentor.score, reverse=False)
    return(newlist)

m1= mentorAccount('Jane', '1', 'asd@sdba', 'sdwasd',True, 'Science', 2,8,0,1,0 )
m2= mentorAccount('Josh', '2', 'asd@sdba', 'sdwasd',True, 'Math', 3,6,0,1,0 )
m3= mentorAccount('Joe', '2', 'asd@sdba', 'sdwasd',True, 'Engineering', 2,9,0,1,0 )

s1=menteeAccount('1', '1', 'asd@sdba', 'sdwasd',True, 'Math', 8 )

mentorList = [m1,m2,m3]
for i in(subjectMatchmaking(s1,((ageMatchmaking(s1, mentorList))))):
    print(i.firstName)