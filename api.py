# import requests

# # for Staging
# url = "https://accounts-uat.paytm.com/user/details"

# # for Production
# # url = "https://accounts.paytm.com/user/details"

# response = requests.get(url, headers = {"session_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiIsImV4cCI6MTY1NjA3MzY4Mi4zMzM1OTUsImF1ZCI6IiIsInN1YiI6bnVsbCwiaXNzIjoiQ29tbW9uRGFzaGJvYXJkIiwia2lkIjoiZjY1NDc1MjQ2MjYzNDMwM2E4YTZmYzE4YTg2YzM4ZTQiLCJpYXQiOjE2NTUyMDk2ODJ9.eyJpZCI6IjYxZDI5ZmMwN2IwZmYyOThiYmU1MzkwOSIsInBob25lIjoiODE5NDkwMjM3NCIsImVtYWlsIjpudWxsLCJyb2xlIjoiVVNFUiIsImF1dGhfdHlwZSI6IlBIT05FIn0.mZfKXwd6h_3c4UoZ7jSS_0BMu1ZFTPvHCzSiIzztI2lki6P1s4j742eiJaR2DITLNOU2LbKSo8Htl-lXYqeXp3QNcEETnNp-CZk1hBy7zZFTVC1gIELoOvnByDyvtHV6JTDWkEWRK1bwT2vWXTda2mRoHbPUtuBmdRasxjeK438"}).json()
# print(response)
import http.client

conn = http.client.HTTPSConnection("newsapi.org")
payload = ''
headers = {
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiIsImV4cCI6MTY1ODU3Mzg2Mi44ODYxOTQsImF1ZCI6IiIsInN1YiI6ImpheWRpcEB5b3BtYWlsLmNvbSIsImlzcyI6IkNvbW1vbkRhc2hib2FyZCIsImtpZCI6IjFjNjc4MWM3YjFlNTRhYTU4NWE5MzQ1MTlhZmE4YmVlIiwiaWF0IjoxNjU3NzA5ODYyfQ.eyJpZCI6IjYyY2U1ODVjNmJiODc5YjI3OGVhMWE4OSIsInBob25lIjoiNzgwMjgzMDQzNiIsImVtYWlsIjoiamF5ZGlwQHlvcG1haWwuY29tIiwicm9sZSI6IlNUT1JFIiwiYXV0aF90eXBlIjoiRU1BSUwifQ.F7P6U4ihhLNHiMVRUxRLBVVd5yFl3DwqcYBQbIwz_JqIahrQefN8txUMCQ26s_eJ9q2kp1uB6RooZvdAETEPXGzhtWbNrOBF30lyF72lU2OfEZw_g5UezBxiqrfZi9PuS3jdUlCtMk8iDcpyrWVR1HOkrJuE0Ij35gRSMAhITZA'
}
conn.request("GET", "/v2/everything?q=tesla&from=2022-06-23&sortBy=publishedAt&apiKey=6ccbc8b477814596a53e3f35d0445f74", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))